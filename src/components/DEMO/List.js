import { getPersonImageUrl } from "./utils";

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];

export function List(){

    const chemists = people.filter(p => p.profession === 'chemist')

    const listItems = chemists.map(p =>
        <li key={p.id}>
            <img src = {getPersonImageUrl(p)} alt={p.name}/>

            <p>
                <b>{p.name}:</b>
                {' ' + p.profession + ' '} known for {p.accomplishment}
            </p>
        </li>
    );

    return <ul>{listItems}</ul>
}