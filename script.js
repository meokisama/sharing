// Open in new tab for all labels
window.onload = function () {
    var allLinks = document.querySelectorAll("li.c_list a");
    for (var i = 0; i < allLinks.length; i++) {
        var currentLink = allLinks[i];
        currentLink.setAttribute("target", "_blank");
    }
}

// URL settings for each item
document.getElementById("9784798633336").addEventListener("click", function () {
    window.open("content/9784798633336/", '_blank');
});


document.getElementById("9784798633350").addEventListener("click", function () {
    window.open("content/9784798633350/", '_blank');
});


document.getElementById("9784046821096").addEventListener("click", function () {
    window.open("content/9784046821096/", '_blank');
});


document.getElementById("9784046826398").addEventListener("click", function () {
    window.open("content/9784046826398/", '_blank');
});


document.getElementById("9784041140628").addEventListener("click", function () {
    window.open("content/9784041140628/", '_blank');
});


document.getElementById("9784049150148").addEventListener("click", function () {
    window.open("content/9784049150148/", '_blank');
});


document.getElementById("9784046827746").addEventListener("click", function () {
    window.open("content/9784046827746/", '_blank');
});


document.getElementById("9784867164518").addEventListener("click", function () {
    window.open("content/9784867164518/", '_blank');
});


document.getElementById("9784046830760").addEventListener("click", function () {
    window.open("content/9784046830760/", '_blank');
});


document.getElementById("9784094531602").addEventListener("click", function () {
    window.open("content/9784094531602/", '_blank');
});

document.getElementById("9784575753271").addEventListener("click", function () {
    window.open("content/9784575753271/", '_blank');
});

document.getElementById("9784086315289").addEventListener("click", function () {
    window.open("content/9784086315289/", '_blank');
});

document.getElementById("9784798633589").addEventListener("click", function () {
    window.open("content/9784798633589/", '_blank');
});

document.getElementById("9784086315258").addEventListener("click", function () {
    window.open("content/9784086315258/", '_blank');
});

document.getElementById("9784049147490").addEventListener("click", function () {
    window.open("content/9784049147490/", '_blank');
});

document.getElementById("9784824005007").addEventListener("click", function () {
    window.open("content/9784824005007/", '_blank');
});

document.getElementById("9784049151299").addEventListener("click", function () {
    window.open("content/9784049151299/", '_blank');
});


//Pagination
document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 16;
    let currentPage = 0;
    const items = Array.from(document.getElementsByClassName('item')).slice(0);

    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        items.forEach((item, index) => {
            item.classList.toggle('hidden', index < startIndex || index >= endIndex);
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
                document.querySelector('.container .head-title').scrollIntoView({behavior: "smooth"});
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