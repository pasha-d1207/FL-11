let textContent = ['Find the cat',
    "Prepare cat's carry",
    'Bathe a cat']
let max_item = 10;
// create_element

let rootNode = document.getElementById('root');
let h1 = document.createElement('h1');
let p = document.createElement('p');
let input = document.createElement('input');
let i_add_box = document.createElement('i');
let check_box_outline_blank = document.createElement('i');
let create = document.createElement('i');
let icon_delete = document.createElement('i');
let blue_line = document.createElement('p');
let ol = document.createElement('ol');

// add content
h1.textContent = 'TODO Cat List';
h1.id = 'h1'
input.type = 'text';
input.placeholder = 'Add new action';
input.classList.add('width');
i_add_box.textContent = 'add_box';
i_add_box.classList.add('material-icons', 'md-gray', 'md-48');
blue_line.id = 'blue_line';


// add element
rootNode.appendChild(h1)
rootNode.appendChild(p)
p.appendChild(input)
p.appendChild(i_add_box)
rootNode.appendChild(blue_line)
rootNode.appendChild(ol)

function getLi() {
    for (let i = 0; i < textContent.length; i++) {
        let check_box_outline_blank = document.createElement('i');
        let create = document.createElement('i');
        let icon_delete = document.createElement('i');
        let li = document.createElement('li');
        let span = document.createElement('span');

        check_box_outline_blank.textContent = 'check_box_outline_blank';
        create.textContent = 'create';
        icon_delete.textContent = 'delete';
        check_box_outline_blank.classList.add('material-icons', 'md-dark', 'checkbox');
        create.classList.add('material-icons', 'md-dark', 'create');
        icon_delete.classList.add('material-icons', 'md-dark', 'right');

        li.draggable = true;
        span.textContent = textContent[i];
        ol.appendChild(li)
        li.appendChild(check_box_outline_blank);
        li.appendChild(span);
        li.appendChild(create);
        li.appendChild(icon_delete);

    }
}

i_add_box.addEventListener('click', function () {
    if (input.value !== '') {
        if (ol.childElementCount < max_item) {
            textContent.push(input.value);
            let check_box_outline_blank = document.createElement('i');
            let create = document.createElement('i');
            let icon_delete = document.createElement('i');
            let li = document.createElement('li');
            let span = document.createElement('span');

            check_box_outline_blank.textContent = 'check_box_outline_blank';
            create.textContent = 'create';
            icon_delete.textContent = 'delete';
            check_box_outline_blank.classList.add('material-icons', 'md-dark', 'checkbox');
            create.classList.add('material-icons', 'md-dark', 'create');
            icon_delete.classList.add('material-icons', 'md-dark', 'right');

            span.textContent = input.value;
            ol.appendChild(li)
            li.appendChild(check_box_outline_blank);
            li.appendChild(span);
            li.appendChild(create);
            li.appendChild(icon_delete);
        } else {
            input.setAttribute('disabled', 'disabled');
            i_add_box.classList.add('pointer-events');
            let elem = document.getElementById('h1');
            let element = document.createElement('h3');
            element.id = 'h3'
            element.textContent = 'Maximum item per list are created.'
            elem.insertAdjacentElement('afterEnd', element)
        }
    }
    remove();
    done();
    rewrite();
    save()

})

getLi();
remove();
done();
rewrite();
save()


function remove() {
    let els = document.getElementsByClassName('right');
    let array = [...els];
    array.forEach(function (item) {
        item.addEventListener('click', function () {
            item.parentNode.parentNode.removeChild(item.parentNode);
            i_add_box.classList.remove('pointer-events');
            input.removeAttribute('disabled', 'disabled');
            document.getElementById('h3').remove();
        });
    });
}

function done() {
    let els = document.getElementsByClassName('checkbox');
    let array = [...els];
    array.forEach(function (item) {
        item.addEventListener('click', function () {
            item.textContent = 'done';
            item.classList.add('pointer-events');
        });
    });
}

function rewrite() {
    let els = document.getElementsByClassName('create');
    let array = [...els];
    array.forEach(function (item) {
        item.addEventListener('click', function () {
            item.previousSibling.classList.add('none_display');
            item.parentNode.firstChild.classList.add('none_display');
            item.parentNode.lastChild.classList.add('none_display');
            item.classList.add('none_display');

            let input = document.createElement('input');
            input.classList.add('no_padding')
            item.parentNode.insertAdjacentElement('beforeEnd', input)

            let create = document.createElement('i');
            create.textContent = 'save';
            create.classList.add('material-icons', 'md-dark', 'save');
            item.parentNode.insertAdjacentElement('beforeEnd', create);

            save()
        });
    });
}

function save() {
    let els = document.getElementsByClassName('save');
    let array = [...els];
    array.forEach(function (item) {
        item.addEventListener('click', function () {
            for (let i = 0; i < item.parentNode.children.length; i++) {
                item.parentNode.children[i].classList.remove('none_display');
            }
            if (item.parentNode.children[4].value !== '') {
                item.parentNode.children[1].textContent = item.parentNode.children[4].value;
                item.parentNode.children[item.parentNode.children.length - 2].remove();
                item.parentNode.children[item.parentNode.children.length - 1].remove();
            } else {
                item.parentNode.children[item.parentNode.children.length - 2].remove();
                item.parentNode.children[item.parentNode.children.length - 1].remove();
            }
        });
    });
}



