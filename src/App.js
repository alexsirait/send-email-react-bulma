import 'bulma/css/bulma.min.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function App() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_vlhvtgj',
				'template_ogmgfzh',
				form.current,
				'GWYD4UQ-NnwiqGjX3'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
		alert('Message successfully sent ..');
	};
	return (
		<section className="section">
			<div className="container">
				<div className="columns is-centered">
					<div className="column is-half">
						<center className="mb-4">
							<h1 className="is-size-2 has-text-weight-semibold is-family-monospace">
								Contact
							</h1>
						</center>
						<form ref={form} onSubmit={sendEmail}>
							<div className="field">
								<label className="label">Name</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="Enter name .."
										name="user_name"
										required
										maxlength={32}
										minLength={3}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Email</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="Enter email .."
										name="user_email"
										required
										minLength={3}
										pattern={`[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`} // eslint-disable-line
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Subject</label>
								<div className="control">
									<input
										className="input"
										type="text"
										placeholder="Enter subject .."
										name="subject"
										required
										minLength={3}
									/>
								</div>
							</div>

							<div className="field">
								<label className="label">Message</label>
								<div className="control">
									<textarea
										className="textarea"
										placeholder="Enter message ,,"
										name="message"
										required
										minLength={3}
									></textarea>
								</div>
							</div>

							<div className="field is-grouped">
								<div className="control">
									<button className="button is-link">Send</button>
								</div>
								<div className="control">
									<button className="button is-link is-light">Reset</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
