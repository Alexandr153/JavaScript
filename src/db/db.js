import reactor from '../images/settings.png';
import storage from '../images/clock.png';

export function getData(){
    return [
        {title: "Reactor", price: 150 + ' tINCH', image: reactor, id:1},
        {title: "Storage", price: 225 + ' tINCH', image: storage, id:2}
    ];
}

