# Validators

The UI library provides a number of premade [validator functions](https://final-form.org/docs/react-final-form/examples/field-level-validation) to use with React Final Form. Here is an example of how one can be used:

```jsx
import { ReactFinalForm, email, InputFieldFF } from '@dhis2/ui'

const { Form, Field } = ReactFinalForm

function FormDemo() {
    const onSubmit = (...args) => console.log(...args)

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name="fieldName"
                        label="Field Label"
                        component={InputFieldFF}
                        // Validators go here:
                        validate={email}
                    />
                </form>
            )}
        </Form>
    )
}
```

## Reference

Each validator provides a feedback message if the input value is invalid, and a few can take a custom message that you provide that will be displayed instead of the default message.

Validators are functions, and some of them _create_ a validator function given one or more arguments, as you will see in the table below. A few examples are shown below the table.

| Validator (`validate={...}`)                                          | Description                                                                                                                                                                                |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `alphaNumeric`                                                        | The value is made up of only letters, numbers, and spaces                                                                                                                                  |
| `boolean`                                                             | The value is a boolean (`true` or `false`)                                                                                                                                                 |
| `composeValidators(validator1, validator2, ...)`                      | Combines several validators into one function                                                                                                                                              |
| `createCharacterLengthRange(lowerBound, upperBound[, customMessage])` | The character length of the value is between `lowerBound` and `upperBound` (inclusive) characters. The optional `customMessage` argument overrides the default validation feedback message |
| `createEqualTo(key[, description])`                                   | The value is equal to the value in the field named `key`. Optional `description` describes the field named `key` in validation feedback. Useful for password confirmation                  |
| `createMaxCharacterLength(upperBound)`                                | The character length of the value is less than or equal to `upperBound`                                                                                                                    |
| `createMaxNumber(upperBound)`                                         | The value is less than or equal to `upperBound`                                                                                                                                            |
| `createMinCharacterLength(lowerBound)`                                | The character length of the value is greater than or equal to `lowerBound`                                                                                                                 |
| `createMinNumber(lowerBound)`                                         | The value is greater than or equal to `lowerBound`                                                                                                                                         |
| `createNumberRange(lowerBound, upperBound[, customMessage])`          | The value is between `lowerBound` and `upperBound` (inclusive). The optional `customMessage` argument overrides the default validation feedback message                                    |
| `createPattern(pattern[, message])`                                   | The value matches the regex `pattern`. The optional `message` argument overrides the default validation feedback message                                                                   |
| `dhis2Password`                                                       | The value meets the criteria for a valid DHIS2 password                                                                                                                                    |
| `dhis2Username`                                                       | The value is a valid DHIS2 username (a string between 1 and 255 characters, inclusive)                                                                                                     |
| `email`                                                               | The value is a valid email address                                                                                                                                                         |
| `hasValue`                                                            | The value is not empty                                                                                                                                                                     |
| `integer`                                                             | The value is an integer (a positive or negative number without decimals, or 0)                                                                                                             |
| `internationalPhoneNumber`                                            | The value is a valid international phone number                                                                                                                                            |
| `number`                                                              | The value is a number (or is a string that represents a number)                                                                                                                            |
| `string`                                                              | The value is a string                                                                                                                                                                      |

## Examples

Simple validator:

```jsx
const ValidatedField = () => <Field validate={email} />
```

'Create' validator:

```jsx
const ValidatedField = () => <Field validate={createNumberRange(0, 10)} />
```

Composed validators:

```jsx
const ValidatedField = () => (
    <Field
        validate={composeValidators(alphaNumeric, createMinCharacterLength(4))}
    />
)
```
