// Action Creator
export function addPerson(person, age) {
  return {
    type: 'ADD_PERSON',
    data: person,
    age: age,
  };
}
