function Event() {
  //Create function here
  function getAlamat(e) {
    alert('garut')
  }

  return (
    // Code Inside div
    <div>
      <button onMouseEnter={getAlamat}>Click saya dong</button>
    </div>
  );
}

export default Event;
