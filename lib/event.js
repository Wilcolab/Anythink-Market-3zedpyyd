function toSnakeCase(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .replace(/[\W_]+/g, '') // Remove non-word characters
        .replace(/_+/g, '_'); // Replace multiple underscores with a single underscore
}
