
function Form() {
  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    // reset the form
    event.target.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input 
          type="text"
          name="todo"
          id="todo"
          placeholder="ecrire ta tache ici"
        />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  )
}

export default Form;