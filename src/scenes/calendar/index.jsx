import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import PageTitle from "../../components/PageTitle";
import { tokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(date);
    };

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarAPI = selected.view.calendar;
        calendarAPI.unselect();

        if (title) {
            calendarAPI.addEvent({
                id: `${selected.dateStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Do you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <PageTitle title="CALENDAR" subtitle="Interactive Calendar Page" />
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box 
                    flex="1 1 20%" 
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem 
                                key={event.id} 
                                sx={{
                                    backgroundColor: colors.greenAccent[500], 
                                    margin: "10px 0",
                                    borderRadius: "2px"
                                }}
                            >
                                <ListItemText 
                                    primary={event.title} 
                                    secondary={
                                        <Typography>{formatDate(event.start)}</Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar 
                        height="72vh" //calendar height on screen
                        plugins={[ //use [] for array
                            dayGridPlugin, 
                            timeGridPlugin, 
                            interactionPlugin, 
                            listPlugin
                        ]} 
                        headerToolbar={{ //use {} for objects. determines what element will be put on top of the calendar
                            left: "prev,next today", //either put comma or space. mix and match to find best position for the tools
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        // initialEvents={[
                        //     { id: "1234", title: "All-day event", date: "2022-09-14" } // sample event
                        // ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;