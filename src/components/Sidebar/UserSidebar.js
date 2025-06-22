import React, { useState } from 'react';
import { NavLink as NavLinkRRD, Link } from 'react-router-dom';

import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	Collapse,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Media,
	Container,
	Row,
	Col,
	Button,
  NavbarBrand,
} from 'reactstrap';

const UserSidebar = ({ routes, logo }) => {
	const [collapseOpen, setCollapseOpen] = useState(false);

	// Toggle collapse open/close
	const toggleCollapse = () => {
		setCollapseOpen(!collapseOpen);
	};

	// Close the collapse when an item is clicked
	const closeCollapse = () => {
		setCollapseOpen(false);
	};

	// Create links for the sidebar
	const createLinks = routes => {
		return routes.map((route, key) => {
			if (route.isMenu !== false)
				return (
					<NavItem key={key}>
						<NavLink
							to={route.layout + route.path}
							tag={NavLinkRRD}
							onClick={closeCollapse}
							activeClassName='active'
							className='text-black d-flex align-items-center'
						>
							<i className={`${route.icon} mr-3`} />
							{route.name}
						</NavLink>
					</NavItem>
				);
		});
	};

	let navbarBrandProps;
	if (logo && logo.innerLink) {
		navbarBrandProps = {
			to: logo.innerLink,
			tag: Link,
		};
	} else if (logo && logo.outterLink) {
		navbarBrandProps = {
			href: logo.outterLink,
			target: '_blank',
		};
	}

	return (
		<Navbar className='navbar-vertical fixed-left navbar-light bg-white' expand='md' id='sidenav-main'>
			<Container fluid>
				{/* Toggler */}
				<Button className='navbar-toggler' type='button' onClick={toggleCollapse}>
					<span className='navbar-toggler-icon' />
				</Button>

				{/* Brand */}
				{logo ? (
					<NavbarBrand className='pt-0' {...navbarBrandProps}>
						<img alt={logo.imgAlt} className='navbar-brand-img' src={logo.imgSrc} />
					</NavbarBrand>
				) : null}

				{/* User profile and other options */}
				<Nav className='align-items-center d-md-none'>
					<UncontrolledDropdown nav>
						<DropdownToggle nav className='nav-link-icon'>
							<i className='ni ni-bell-55' />
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another action</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Something else here</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>

					<UncontrolledDropdown nav>
						<DropdownToggle nav>
							<Media className='align-items-center'>
								<span className='avatar avatar-sm rounded-circle'>
									<img alt='...' src={require('../../assets/img/theme/team-1-800x800.jpg').default} />
								</span>
							</Media>
						</DropdownToggle>
					</UncontrolledDropdown>
				</Nav>

				{/* Collapse for menu items */}
				<Collapse navbar isOpen={collapseOpen}>
					<div className='navbar-collapse-header d-md-none'>
						<Row>
							{logo ? (
								<Col className='collapse-brand' xs='6'>
									<Link to={logo.innerLink}>
										<img alt={logo.imgAlt} src={logo.imgSrc} />
									</Link>
								</Col>
							) : null}
							<Col className='collapse-close' xs='6'>
								<Button className='navbar-toggler' type='button' onClick={toggleCollapse}>
									<span />
									<span />
								</Button>
							</Col>
						</Row>
					</div>

					{/* Navigation */}
					<Nav navbar>{createLinks(routes)}</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
};

export default UserSidebar;
