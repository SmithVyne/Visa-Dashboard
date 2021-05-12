import React from 'react'

export default function Top() {
    return (
        <section id="top">
            <h1><span>VISA</span> DASHBOARD</h1>

            <div id="filter">
                <select>
                    <option disabled>
                        Select Company
                    </option>
                </select>
                <span id="top-left">
                    <input placeholder="Filter by employee" />
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </section>
    )
}
