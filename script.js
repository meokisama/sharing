// Open in new tab for all labels
window.onload = function () {
    var allLinks = document.querySelectorAll("li.c_list a");
    for (var i = 0; i < allLinks.length; i++) {
        var currentLink = allLinks[i];
        currentLink.setAttribute("target", "_blank");
    }
    coverResize();
}

// URL settings for each item
const items = Array.from(document.getElementsByClassName('item')).slice(0);
items.forEach((item) => {
    item.addEventListener("click", function () {
        let url = "content/" + item.id + "/";
        window.open(url, '_blank');
    });
});




//Sidebar
let sideClick = document.querySelectorAll('.sideImgContainer');
sideClick[0].addEventListener('click', () => {
    window.open("https://facebook.com/TheMeoki", '_blank')
})
sideClick[1].addEventListener('click', () => {
    window.open("https://x.com/meokiiii", '_blank')
})
sideClick[2].addEventListener('click', () => {
    window.open("https://github.com/meokisama", '_blank')
})
sideClick[3].addEventListener('click', () => {
    window.open("https://instagram.com/meokisama", '_blank')
})


//Pagination
document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 24;
    let currentPage = 0;
    const items = Array.from(document.getElementsByClassName('item')).slice(0);

    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        items.forEach((item, index) => {
            item.parentElement.classList.toggle('d-none', index < startIndex || index >= endIndex);
        });
        updateActiveButtonStates();
    }

    function createPageButtons() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const paginationContainer = document.createElement('div');
        const paginationDiv = document.body.appendChild(paginationContainer);
        paginationContainer.classList.add('paging');

        // Add page buttons
        for (let i = 0; i < totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
                updateActiveButtonStates();
                document.querySelector('.container .head-title').scrollIntoView({ behavior: "smooth" });
            });

            document.getElementById('bodyContent').appendChild(paginationContainer);
            paginationDiv.appendChild(pageButton);
        }
    }

    function updateActiveButtonStates() {
        const pageButtons = document.querySelectorAll('.paging button');
        pageButtons.forEach((button, index) => {
            if (index === currentPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    createPageButtons(); // Call this function to create the page buttons initially
    showPage(currentPage);
});

// Set height for #spaceHolder in order to implement parallax
document.getElementById('spaceHolder').style.height = document.querySelector('.headimg img').offsetHeight + 'px';
window.addEventListener('resize', () => {
    document.getElementById('spaceHolder').style.height = document.querySelector('.headimg img').offsetHeight + 'px';
    coverResize();
});

// Search Function
function searchFunction() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const items = document.getElementsByClassName('item');

    for (let i = 0; i < items.length; i++) {
        if (!items[i].getElementsByTagName('p')[0].innerHTML.trim().toUpperCase().includes(input)) {
            items[i].parentElement.classList.add('d-none');
        } else items[i].parentElement.classList.remove('d-none');
    }

    if (Array.from(items).every(item => item.parentElement.classList.contains('d-none')))
        document.getElementById('failedInput').style.display = 'block';
    else document.getElementById('failedInput').style.display = 'none';

    if (input != '')
        document.getElementsByClassName('paging')[0].style.display = "none";
    else {
        for (let i = 0; i < items.length; i++) {
            if (i < 24) items[i].parentElement.classList.remove('d-none');
            else items[i].parentElement.classList.add('d-none');
        }
        document.getElementsByClassName('paging')[0].style.display = "flex";
    }
}