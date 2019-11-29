const Helper = {
	numberOfSeconds: (secondsToWait) => {
		/**
		 * @param {Function} keepPromise When this function is called, Javascript know that you finished doing what you promised
		 */
		let promiser = (keepPromise) => {
			/**
			 * This function is the one that is called after waiting the number of seconds required
			 */
			let functionToCallAfterSeconds = () => {
				// We are done waiting so we finished doing what we promised.
				keepPromise()
			}
			// Wait for secondsToWait and call functionToCallAfterSeconds
			setTimeout(functionToCallAfterSeconds, secondsToWait * 1000)
		}
	
		// Create a promise object and return it. This turns this function into an async function
		let promise = new Promise(promiser)
		return promise
	}
}