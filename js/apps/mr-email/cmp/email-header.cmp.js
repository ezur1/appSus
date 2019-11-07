'use strict';

export default {
    template: `
        <header class="email-header-container flex both-align-c space-between">
            <h1>E-mail</h1>
            <div class="filter-emails">
            <input type="text" placeholder="Search Mail" />
            <select>
                <option>All</option>
                <option>Read</option>
                <option>Unread</option>
            </select>
            </div>
            <button>Apps</button>
        </header>
    `,
}