import { Button } from '@material-ui/core';
import React from 'react';
import '../styles/Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<Button
				className='sidebar__compose'
				startIcon={<AddIcon fontSize='large' />}
			>
				Compose
			</Button>

			<SidebarOption Icon={InboxIcon} title='Inbox' number={54} />
		</div>
	);
};

export default Sidebar;
