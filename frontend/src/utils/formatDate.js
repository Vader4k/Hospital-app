
export const formatDate = (date, options = { day: 'numeric', month: 'short', year: 'numeric' }) => {
    return new Date(date).toLocaleDateString('en-US', options);
}