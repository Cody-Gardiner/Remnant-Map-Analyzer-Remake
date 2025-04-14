export function getDistinctByKey(arr, key) {
    const seen = new Set();
    if (!arr)
        return [];
    return arr.filter((item) => {
        const val = item[key];
        if (seen.has(val))
            return false;
        seen.add(val);
        return true;
    });
}
export function getDistinctCardItemsWithCount(items) {
    const counts = {};
    // Count occurrences
    for (const item of items) {
        counts[item.name] = (counts[item.name] || 0) + 1;
    }
    const result = [];
    for (const name in counts) {
        const count = counts[name];
        result.push({
            name: count > 1 ? `${name} x${count}` : name,
        });
    }
    return result;
}
