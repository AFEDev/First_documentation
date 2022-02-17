/**
 * Sakini su studento vardu ir jo vidurkiu
 * @param {Studento vardas} name 
 * @param {}marksList 
 * @returns {string} Sakinys
 */

function marks (name:string, marks: Array<number>):string {
    const sumOfMarks:number = marks.reduce((container, value) => container + value);
    const average = sumOfMarks / marks.length;

return `${name}: jos vidurkis ${average}`
}

export {marks};