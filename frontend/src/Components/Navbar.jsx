export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <input type="search" placeholder="Search Employee name here.." />
        </div>

        <div>
          <select>
            <option> -- Select Department -- </option>
            <option> Human Resources </option>
            <option> Business Development </option>
            <option> Accounting </option>
            <option> Services </option>
            <option> Training </option>
            <option> Research and Development </option>
            <option> Marketing </option>
            <option> Engineering </option>
            <option> Sales </option>
            <option> Legal</option>
            <option> Support</option>
          </select>
        </div>
        <div>
          <a href="#"> Sort by Joining Date</a>
        </div>
      </div>
    </>
  );
};
