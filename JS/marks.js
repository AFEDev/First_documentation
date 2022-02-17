function marks(name, marks) {
    const sumOfMarks = marks.reduce((container, value) => container + value);
    const average = sumOfMarks / marks.length;
    return `${name}: jos vidurkis ${average}`;
}
export { marks };
//# sourceMappingURL=marks.js.map