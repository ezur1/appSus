'use strict';

export default {
    template: `
        <header class="keep-header-container flex both-align-c space-around">
            <div><i class="icon far fa-bell flex"><h1 class="logo-txt">Mr keep</h1></i></div>
            <div class="filter-container">
                <input type="text" placeholder="Search a keep" />
                <select>
                    <option>All</option>
                    <option>Read</option>
                    <option>Unread</option>
                </select>
                <button><i class="fas fa-search"></i></button>
            </div>
        </header>
    `,
}