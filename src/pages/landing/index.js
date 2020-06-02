import {test} from '../../js/test';
import "../../main.css";
import '../index/index.scss';


test('index');

class Foo {
    constructor(){
        this.value = "foobar"
    }
    static instance() {
        return new Foo()
    }
    getValue() {
        return this.value
    }
}

console.log(Foo.instance().getValue())

async function apiCall() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await resp.json();
    console.log(data);
}

apiCall();