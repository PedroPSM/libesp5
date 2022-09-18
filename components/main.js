import Tree from './tree.js'

const menu = [
    { id : 1, name: "Entre em contato", parent: null },
    { id: 2, name: '<a href="https://api.whatsapp.com/send?phone=556499058575&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Libesp%2C%20preciso%20de%20ajuda." target="_blank">Maike <img src="../assects/contat.png" width="30px" class="border-15"></a><hr>', parent: 1 },
    { id: 3, name: '<a href="https://api.whatsapp.com/send?phone=556499750061&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Libesp%2C%20preciso%20de%20ajuda." target="">Penha <img src="../assects/contat.png" width="30px" class="border-15"></a><hr>', parent: 1 },
    { id: 4, name: '<a href="https://api.whatsapp.com/send?phone=5564981210613&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Libesp%2C%20preciso%20de%20ajuda." target="">Libesp <img src="../assects/contat.png" width="30px" class="border-15"></a>', parent: 1 }
]

Tree(menu)