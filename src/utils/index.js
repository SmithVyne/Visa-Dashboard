export const findDocumentsIds = (documents) => {
    return documents.map(({visa_template_document: {id}}) => id);
}

export const findHeadersIds = (header) => {
    const result = [];
    header.forEach(({visa_template_documents}) => {
        visa_template_documents.forEach(({id}) => result.push(id))
    });
    return result;
}