import { NavLink } from 'react-router-dom';

import Logo_white from '../images/logo_white.svg';

function AdminSideBar() {
    return (
        <div className="side-bar">
            <div className="list-group">
                <div className="mb-4">
                    <img src={Logo_white} alt='logo' className="admin-logo" />
                </div>
                
                <NavLink to="/admin/new-messages" activeClassName="active"
                    className="list-group-item list-group-item-action">New messages
                </NavLink>

                <NavLink to="/admin/enquiries" activeClassName="active"
                    className="list-group-item list-group-item-action">Enquiries
                </NavLink>
                
                <NavLink to="/admin/create-establishment" activeClassName="active"
                    className="list-group-item list-group-item-action">Create new establishment
                </NavLink>
            </div>
        </div>
    );
}

export default AdminSideBar;