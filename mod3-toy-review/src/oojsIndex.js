// what is my object? 
        // -toy
        // -controller



        //what does each controller object need to be able to do
        // -fetch toys from db
        // -mannage toy form showing/not
        // -create new toys
        // -show form




    // // what does each toy object need to be able to do?
    //     -hold it properties:
    //         id, name, image, likes
    //     -add to it's likes
    //     -rendor itself



    document.addEventListener(
        'DOMContentLoaded', 
        () =>{
            const page = new Controller;
            page.getToys();
            page.formButton.addEventListener('click', page.toggleForm.bind(page));
        }
    )
    
    
    
    
    
    
    
    