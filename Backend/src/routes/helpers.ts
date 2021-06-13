export function processStringValue(value: any) {
    return typeof value === 'string' ? `'${value}'` : value;
}

export function processArrayValue(value: any) {
    if (!Array.isArray(value)) {
        return value;
    }
    if (value.length === 0) return '()';
    let result = '';
    for (const entry of value) {
        result += processStringValue(entry) + ',';
    }
    return '(' + result.slice(0, -1) + ')';
}

export function processValue(value: any) {
    if (Array.isArray(value)) {
        return processArrayValue;
    }
    return processStringValue(value);
}
