import { Campaign, MainLocations, Mode } from '@/constants/worlds';
import { cleanEventName } from './helpers/cleanEvent';
export const processFileData = (content) => {
    if (!content)
        return;
    let text = content.split(Campaign.Ward13)[0];
    const mainCampaignPart = content.split(Campaign.City)[1];
    const gameRegex = /Game/g;
    // Detect main campaign
    if (mainCampaignPart) {
        text = mainCampaignPart.replace(gameRegex, '\n');
    }
    else {
        // Subject 2923 Campaign
        const beforeWardPrime = content.split(Campaign.Subject2923.WardPrime)[0];
        const afterOverworld = beforeWardPrime.split(Campaign.Subject2923.Overworld)[1];
        text = afterOverworld.replace(gameRegex, '\n');
    }
    const textArray = text.split('\n');
    // Detect adventure mode
    const allLines = content.split('\n');
    const adventureLines = allLines.filter((line) => line.includes(Mode.Adventure.name));
    let adText = adventureLines[adventureLines.length - 1];
    let adventureMode = false;
    let adTextArray = [];
    if (adText !== undefined) {
        adventureMode = true;
        adText = adText.replace(gameRegex, '\n');
        adTextArray = adText.split('\n');
    }
    if (adventureMode) {
        return parseWorldData(adTextArray, Mode.Adventure.tag);
    }
    else {
        return parseWorldData(textArray, Mode.Campaign.tag);
    }
};
export function parseWorldData(textArray, worldMode) {
    const worldLocations = [];
    const items = [];
    const bosses = [];
    const sideQuests = [];
    const currentMainLocation = worldMode === Mode.Adventure.tag
        ? (textArray[1]?.split('/')[1]?.split('_')[1] ?? 'Unknown')
        : 'Fairview';
    for (let i = 0; i < textArray.length; i++) {
        const textLine = textArray[i];
        const parts = textLine.split('/');
        console.log(parts);
        if (!parts[1])
            continue;
        let eventName;
        const setEventName = () => {
            eventName = parts[3]?.split('_')[2];
            if (!eventName)
                return false;
            return true;
        };
        // Reset values each loop
        const lastEventName = eventName;
        if (textLine.includes('Quest_Event')) {
            if (!setEventName())
                continue;
            if (eventName !== lastEventName) {
                items.push({
                    name: cleanEventName(eventName),
                });
            }
        }
        if (textLine.includes('Quest_Boss') || textLine.includes('Mini')) {
            if (!setEventName())
                continue;
            if (eventName !== lastEventName) {
                bosses.push({
                    name: cleanEventName(eventName),
                });
            }
        }
        else if (textLine.includes('Siege') ||
            textLine.includes('SmallD') ||
            textLine.includes('OverworldPOI')) {
            if (!setEventName())
                continue;
            if (eventName !== lastEventName) {
                sideQuests.push({
                    name: cleanEventName(eventName),
                });
            }
        }
        else if (textLine.includes('Overworld_Zone')) {
            const locationName = textLine.split('/')[3].split('_')[1] +
                textLine.split('/')[3].split('_')[2] +
                textLine.split('/')[3].split('_')[3];
            const convertedName = MainLocations[locationName];
            if (convertedName) {
                worldLocations.push({
                    name: cleanEventName(convertedName),
                });
            }
        }
    }
    const worldData = {
        mode: worldMode,
        currentMainLocation: currentMainLocation,
        locations: worldLocations,
    };
    // Add missing bosses/encounters
    if (worldMode === Mode.Campaign.tag) {
        bosses.push({
            name: cleanEventName('Dreamer'),
        });
        bosses.push({
            name: cleanEventName('Nightmare'),
        });
        bosses.push({
            name: cleanEventName('RootMother'),
        });
        bosses.push({
            name: cleanEventName('UndyingKing'),
        });
    }
    return { worldData, items, bosses, sideQuests };
}
