import React from 'react';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

function Button1() {
  return <div><br/>
<Button variant="contained">
<Link to="/AdminLogin" className="anchor"> Admin Login</Link> &nbsp;
  
  
  </Button> &nbsp;&nbsp;&nbsp;
<Button variant="contained">
<Link to="/StudentLogin" className="anchor"> Student Login</Link> &nbsp;
  </Button>

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React Js</Typography>
        </AccordionSummary>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node Js</Typography>
        </AccordionSummary>
        
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular js</Typography>
        </AccordionSummary>
      </Accordion>
<br/><br/>
  </div>;
}

export default Button1;
