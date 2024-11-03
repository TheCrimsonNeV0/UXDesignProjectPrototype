import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarLibrary from "./library/SearchBarLibrary";
import ContentTypeFilterLibrary from "./library/ContentTypeFilterLibrary";
import BookContainer from "./library/BookContainer";
import to_kill_a_mockingbird from '../images/books/to_kill_a_mockingbird.jpg'
import harry_potter_and_the_philosophers_stone from '../images/books/harry_potter_and_the_philosophers_stone.jpg'
import the_lord_of_the_rings from '../images/books/the_lord_of_the_rings.webp'

function LibraryCatalogPage(props) {

    const books = [{
        cover: to_kill_a_mockingbird,
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        type: 'Book',
        description: 'Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape. Scout and Jem are mocked by classmates for this. Unfortunately, the man is convicted by an all-white jury.'
    }, {
        cover: harry_potter_and_the_philosophers_stone,
        name: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        type: 'Book',
        description: "This fantasy novel follows the story of an eleven-year-old orphan, Harry Potter, who discovers he is a wizard. Invited to Hogwarts School of Witchcraft and Wizardry, Harry embarks on an incredible journey, makes new friends, and faces dark forces connected to his mysterious past, eventually encountering the dark wizard Voldemort, who killed his parents."
    }, {
        cover: the_lord_of_the_rings,
        name: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        type: 'eBook',
        description: "This epic fantasy novel tells the story of Frodo Baggins, a young hobbit who inherits a powerful ring that could bring devastation if it falls into the wrong hands. Along with a fellowship of friends and allies, Frodo sets out on a perilous journey across Middle-earth to destroy the One Ring in the fires of Mount Doom, where it was forged, to prevent the dark lord Sauron from conquering the world."
    }
    ];

    return (
        <div>
            <TopMenu/>
            <div className="grid" style={{marginTop: "3vh"}}>
                <div className="col-2"/>
                <div className="col-8" style={{fontSize: "10vh"}}>
                    Library Catalog
                </div>
                <div className="col-2"/>
            </div>
            <div style={{marginTop: "5vh"}}>
                <SearchBarLibrary/>
            </div>
            <div className="grid">
                <div className="col-1" style={{marginTop: "5vh", marginLeft: "2vw"}}>
                    <ContentTypeFilterLibrary/>
                </div>
                <div className="col-10" style={{marginTop: "5vh", marginLeft: "3vw"}}>
                    {books.map((book, index) => (
                        <BookContainer
                            key={index}
                            cover={book.cover}
                            name={book.name}
                            author={book.author}
                            type={book.type}
                            description={book.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LibraryCatalogPage;