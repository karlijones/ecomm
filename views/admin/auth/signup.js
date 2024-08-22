const layout = require('../layout');

module.exports = ({ req }) => {
    return layout({ 
        content: `
        <div>
            Your id is: ${req.session.userId}
            <form method="POST">
                <input placeholder="email" />
                <input placeholder="password" />
                <input placeholder="password confirmation" />
                <button>Sign Up</button>
            </form>
        </div>
    `
    });
};