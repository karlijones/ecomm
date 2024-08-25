const layout = require('../layout');

const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg;
    }   catch (err) {
        return '';
    }

}

module.exports = ({ req, errors }) => {
    return layout({ 
        content: `
        <div>
            Your id is: ${req.session.userId}
            <form method="POST">
                <input placeholder="email" />
                ${getError(errors, 'email')}
                <input placeholder="password" />
                ${getError(errors, 'password')}
                <input placeholder="password confirmation" />
                ${getError(errors, 'passwordConfirmation')}
                <button>Sign Up</button>
            </form>
        </div>
    `
    });
};