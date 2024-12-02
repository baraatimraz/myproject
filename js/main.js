let listItem = [ 
    ["Home" , "fa fa-home"] , 
    ["About" , "fa fa-clock"] , 
    ["Contact Us" , "fa fa-phone"] ,
    ["Profile" , "fa fa-user"] , 
    ["Setting" , "fa fa-cog"]
    ];


function createNavbar(...navItem){
    for(listItem of navItem) {
        document.write(`
            <li>
                <a href='${listItem[0]} . html'> 
                    <i class="${listItem[1]}"></i>
                    ${listItem[0]} 
                </a>
            </li>
            `)
    }
}