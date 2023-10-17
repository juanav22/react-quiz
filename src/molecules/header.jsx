import headerImg from '../assets/todo-bg.jpg'

import '../styles/styles.css';

function Header () {
    return (
        <div className="header-container">
            <img src={headerImg} alt="todo-list" />
            <span className="todo-lanel">To-do List</span>
        </div>
    );
}

export default Header;