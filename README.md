# timetabling app

This svelte web app is for the timetabling project and is used for collating the availibility of staff.

The build process happens through webpack.

Babel is the Transpiler

## Code info
The project’s important data is build on two arrays:
* Data – contains the current reason code as to why they aren’t available .
* reasonList – contains the current reason as to why they aren’t available.

Note, reason and code are not one-to-one as the other reason has a text entry box, not a predefined reason.

Both arrays represent the week, within in each array are 5 arrays(one for each weekday), with 13 entries representing hourl blocks from 8am to 9pm.

## Audience information
<p> First, select the reason why you are unavailable. If it is other, write the time slot specific reason before proceding.</p>
<p> Then, click on the relevant time slot.</p>
<p><u>Hint</u> if you want to select an entire day or time slot, click the relevant header on the table.</p>
