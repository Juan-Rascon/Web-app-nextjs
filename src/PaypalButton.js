import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      height: 200,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
  }));

class PaypalButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isEnabled: false
        }
    }

    componentDidMount() {
        this.setState({isEnabled:true})

           paypal.Buttons({
              style: {
                  shape: 'pill',
                  color: 'silver',
                  layout: 'vertical',
                  label: 'subscribe'
              },
              createSubscription: function(data, actions) {
                return actions.subscription.create({
                  'plan_id': 'P-7L655485DC240363GL76OLII'
                });
              },
              onApprove: function(data, actions) {
                alert(data.subscriptionID);
              }
          }).render('#paypal-button-container');
    }

    render(){
        return(
        <div>
            {this.state.isEnabled? <div id="paypal-button-container"/> : "Loading"}
        </div>
        )
    }
}

export default PaypalButton;