import styles from '../styles/Email.module.css'
const Email = () => {
    return (
        <div className={styles.background}>
            <div className='d-flex align-items-center justify-content-center rounded-3 col-12  col-sm-12 col-md-12 col-lg-12 mt-5 p-5'>
                <div>
                    <h1>LET STAY IN TOUCH</h1>
                    <p>Get updates on sales, specials and more</p>
                    <input className="form-control" type="email" placeholder="PLEASE ENTER YOUR EMAIL" />
                    <br />
                    <a className="btn btn-primary" role="button" aria-disabled="true">SUBMIT</a>
                </div>
            </div>
        </div>
    );
};

export default Email;