import React from 'react';
import styles from './LeftMenu.module.scss';

const mockUser = {
  name: 'Alex Morgan',
  status: 'Premium Member',
};

const mockFlight = {
  code: 'TK1865',
  from: 'IST',
  to: 'JFK',
  status: 'Active',
};

const navLinks = [
  { label: 'Dashboard', active: true },
  { label: 'My Bookings' },
  { label: 'Flight History' },
  { label: 'Notifications' },
  { label: 'Settings' },
];

const LeftMenu = () => {
  return (
    <aside className={styles.leftMenu}>
      <div className={styles.logo}>FlightInsight</div>
      <div className={styles.flightBox}>
        <div className={styles.flightHeader}>
          <span>Your Flight</span>
          <span className={styles.activeStatus}>{mockFlight.status}</span>
        </div>
        <div className={styles.flightCode}>{mockFlight.code}</div>
        <div className={styles.flightRoute}>
          <span>{mockFlight.from}</span>
          <span className={styles.arrow}>→</span>
          <span>{mockFlight.to}</span>
        </div>
      </div>
      <nav className={styles.navMenu}>
        {navLinks.map((link) => (
          <div
            key={link.label}
            className={link.active ? styles.activeNav : styles.navItem}
          >
            {link.label}
          </div>
        ))}
      </nav>
      <div className={styles.profileBox}>
        <div className={styles.avatar} />
        <div>
          <div className={styles.userName}>{mockUser.name}</div>
          <div className={styles.userStatus}>{mockUser.status}</div>
        </div>
      </div>
    </aside>
  );
};

export default LeftMenu; 