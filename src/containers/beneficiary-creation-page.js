// class BeneficiaryCreationPage extends React.Component
class BeneficiaryCreationPage extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="name" required />
          </div>
          <div>
            <input type="text" name="address" required />
          </div>
          <div>
            <input type="phone" name="contact" required />
          </div>
          <div>
            <input type="email" name="email" required />
          </div>
          <div>
            <input type="text" name="logo" />
          </div>
          <div>
            <textarea name="description" />
          </div>
          <div>
            <input type="text" name="website" />
          </div>
          <div>
            <button type="button" onClick={confirmDelete}>DELETE</button>
          </div>
        </form>
      </div>
    );
  }

  confirmDelete = () => {
    if (confirm("Are you sure you want to delete")) {
      // remove this beneficiary on state
    }
  }
}