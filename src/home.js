import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Taking Photos on the iPhone', body: 'Whether you have an iPhone 14 Pro or an earlier phone, these pro tips will help you get your best ever photos.', author: 'Mario', id: 1 },
        { title: 'Resident Evil 4 Remake', body: 'Resident Evil 4 Remake is a substantial improvement over the original game, but not in the ways you might expect. ', author: 'Luigi', id: 2 },
        { title: 'ChatGPT Can Pass the Bar Exam Now', body: 'We already know machines can store more information than humans. The question is what happens next.', author: 'Princess', id: 3 },
        { title: 'Steam Deck Is on Sale for the First Time Ever', body: 'Valve\'s portable gaming device, the Steam Deck, came out just over a year ago. The company is celebrating the occasion with a big sale. ', author: 'Bowser', id: 4 },
        { title: 'Learning React is easy', body: 'In a world of many complicated tutorials, this one keeps it simple.', author: 'Mario', id: 5 }
    ]

    );


    return (
        <div className="home">

            <BlogList blogs={blogs} title="All Blogs!" />

        </div>


    );
}

export default Home;