import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GroupAdd from '@material-ui/icons/GroupAdd';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useRouter } from 'next/router'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        router.push(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Events" value ="/events" icon={<CalendarTodayIcon />} />
      <BottomNavigationAction label="Join" value ="/register" icon={<GroupAdd />} /> 
    </BottomNavigation>
  );
}

