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

export function updateQueryHelper(attributes) {
    let query = ``;
    for (const property in attributes) {
        const value = attributes[property];
        query += `${property}=${typeof value == 'string' ? "'" + value + "'" : value},`;
    }
    return query.slice(0, -1);
}

export function getSchemaFromAttrHelper(attributes, defaultAttributes = []) {
    if (Array.isArray(attributes)) {
        return defaultAttributes.join(',');
    }
    return Object.keys(attributes).join(',');
}

export function getValuesFromAttrHelper(attributes) {
    if (Array.isArray(attributes)) {
        return convertAttrArrayToString(attributes);
    }
    return convertAttrArrayToString(Object.values(attributes));
}

function convertAttrArrayToString(attributes) {
    let query = '';
    for (const attr of attributes) {
        query += typeof attr === 'string' ? `'${attr}',` : `${attr},`;
    }
    return query.slice(0, -1);
}
