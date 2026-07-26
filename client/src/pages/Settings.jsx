import { useState } from "react";


function Settings(){

    const [notifications,setNotifications] = useState(true);

    const [darkMode,setDarkMode] = useState(false);


    return(

        <div>

            <h1>⚙ Settings</h1>

            <p>
                Manage your laboratory system preferences
            </p>



            <div
                style={{
                    marginTop:"25px",
                    background:"#ffffff",
                    padding:"20px",
                    borderRadius:"15px"
                }}
            >

                <h2>👤 Administrator Profile</h2>

                <p>
                    Name: Lab Administrator
                </p>

                <p>
                    Role: Laboratory Manager
                </p>

            </div>



            <div
                style={{
                    marginTop:"20px",
                    background:"#ffffff",
                    padding:"20px",
                    borderRadius:"15px"
                }}
            >

                <h2>🔔 Notifications</h2>

                <label>

                    <input
                        type="checkbox"
                        checked={notifications}
                        onChange={() =>
                            setNotifications(!notifications)
                        }
                    />

                    Enable Sample Alerts

                </label>


            </div>



            <div
                style={{
                    marginTop:"20px",
                    background:"#ffffff",
                    padding:"20px",
                    borderRadius:"15px"
                }}
            >

                <h2>🌙 Appearance</h2>

                <label>

                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() =>
                            setDarkMode(!darkMode)
                        }
                    />

                    Enable Dark Mode

                </label>


            </div>



            <div
                style={{
                    marginTop:"20px",
                    background:"#ffffff",
                    padding:"20px",
                    borderRadius:"15px"
                }}
            >

                <h2>🏥 Laboratory Details</h2>

                <p>
                    Smart Laboratory Workflow System
                </p>

                <p>
                    Version: 1.0
                </p>

            </div>


        </div>

    );

}


export default Settings;