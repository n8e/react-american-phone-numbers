# react-american-phone-numbers
React component to input and display american telephone numbers

## How to use this?

1. To install into your project, run `npm install -save react-american-phone-numbers`.

2. Import the component into your component
`import TelephonePicker from 'react-american-phone-numbers';`

3. To display a string phone number such as `+1 (315) 323-0723`, simply supply it as a `phone` prop to the component as
```
<Telephone phone="+1 (315) 323-0723" />
```

4. Supply an onChange function to be executed when the data is changed in the component. Your component may have a state value called "phone" with the value `+1 (315) 323-0723`

```
import TelephonePicker from 'react-american-phone-numbers';
...Other Imports

class YourComponent extends Component{
  constructor(props) {
    super(props);

    this.state = {
      phone: '+1 (315) 323-0723',
    };

    this.writePhone = this.writePhone.bind(this);
  }

  writePhone(telephone) {
    this.setState({ phone: telephone });
  }

  render() {
    return (
      <div>
        <TelephonePicker
          phone={this.state.phone}
          writePhone={this.writePhone}
        />
      </div>
    );
  }
}

export default YourComponent;
```

This way you can supply your string values to the component and get the value when the component receives input.
