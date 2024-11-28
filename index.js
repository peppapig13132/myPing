const ping = require("ping");

// Target host to ping
const targetHost = "google.com";

// Function to log the status
async function myPing() {
    while (true) {
        try {
            const res = await ping.promise.probe(targetHost, {
                timeout: 2, // Timeout in seconds
            });

            if (res.alive) {
                const time = parseFloat(res.time); // Get the response time

                // Transport emojis based on speed categories
                if (time < 5) {
                    process.stdout.write("🟢"); // Fast
                } else if (time < 15) {
                    process.stdout.write("🟡"); // Medium
                } else {
                    process.stdout.write("🟠"); // Slow speed
                }
            } else {
                process.stdout.write("⚪"); // Timeout
            }
        } catch (error) {
            process.stdout.write("⚪"); // Error also as Timeout
        }

        // Wait for 100 milliseconds before the next ping
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
}

myPing();
