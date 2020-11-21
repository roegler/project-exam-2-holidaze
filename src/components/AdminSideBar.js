import React from 'react';

import Logo_white from '../images/logo_white.svg';

function AdminSideBar() {
    return (
        <div class="side-bar">
            <div class="list-group">
                <div className="mb-4">
                    <img src={Logo_white} alt='logo' />
                </div>
                <a href="/admin/enquiries" class="list-group-item list-group-item-action active">Enquiries</a>
                <a href="/admin/new-messages" class="list-group-item list-group-item-action">New messages</a>
                <a href="/admin/create-establishment" class="list-group-item list-group-item-action">Create new establishment</a>
            </div>
        </div>
    );
}

export default AdminSideBar;