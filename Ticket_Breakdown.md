# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Preface

Allowing a facility to have a custom agent IDs means we will have to create various functions to convert the custom ID to match the database ID. To store the custom IDs, each facility is given a separate table that will point to the database ID. This allows for less duplicate agent info in the database.


![database structure to link custom ID to database ID](./agentIDs.png)

```
    function getShiftsByFacility(facilityId) {
        returns shifts worked by Quarter, and agents' info associated with the shifts
    }

    function generateReport(shiftList) {
        converts entire facility shift table to PDF
        returns table as PDF
    }
```

For a new process, we would need various functions to:
    - Save agent info based on facility custom ID
        Various methods to solve this?:
            New database table storing custom agent ID associating/pointing with database ID
    - Save shifts associated to agents based on new ID
    - Get all shifts in facility based on Facility's custom agent ID
    - Generate report of agent's list of shifts based on facility's custom ID
    - Generate reports of multiple agents
