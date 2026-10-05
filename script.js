const calendarGrid = document.getElementById('calendar-grid');
const calendarSelectMode = document.getElementById('calendar-select-mode');
const selectStartBtn = document.getElementById('select-start-btn');
const selectDueBtn = document.getElementById('select-due-btn');

const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

const startDateInput = document.getElementById('start-date');
const dueDateInput = document.getElementById('due-date');
const warningDiv = document.getElementById('deadline-warning');
const shortDeadlineWarning = document.getElementById('short-deadline-warning');

const assignmentSelectEl = document.getElementById('assignment-select');
const assignmentHeader = document.createElement('div');
assignmentHeader.style = "color:#fff;font-size:1.3em;font-weight:bold;margin:18px 0 8px 0;";
const assignmentDesc = document.createElement('div');
assignmentDesc.id = "assignment-desc";
assignmentDesc.style = "color:#fff;font-size:1em;margin-bottom:8px;";
const dueDateInputEl = document.getElementById('due-date');

// Populate assignment select
Object.keys(CEN100_ASSIGNMENTS).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = CEN100_ASSIGNMENTS[key].title;
    assignmentSelectEl.appendChild(opt);
});

assignmentSelectEl.addEventListener('change', function() {
    const val = assignmentSelectEl.value;
    if (CEN100_ASSIGNMENTS[val]) {
        assignmentHeader.innerHTML = CEN100_ASSIGNMENTS[val].header;
        assignmentDesc.innerHTML = CEN100_ASSIGNMENTS[val].description;
    } else {
        assignmentHeader.innerHTML = "";
        assignmentDesc.innerHTML = "";
        dueDateInputEl.value = "";
    }
    // Toggle the layout class so controls fill the bottom when an assignment is selected
    const centerCard = document.querySelector('.center-form-card');
    if (centerCard) {
        if (val) centerCard.classList.add('controls-fill');
        else centerCard.classList.remove('controls-fill');
    }
});


function getMonthName(monthIdx) {
    return [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ][monthIdx];
}

const today = new Date();
let viewYear = today.getFullYear();
let viewMonth = today.getMonth();
let startDate = null, endDate = null, selectingEnd = false;

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const pad = n => String(n).padStart(2, '0');

const fmt = d => {
    if (!d) return '';
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    return `${year}-${month}-${day}`;
};
const sameDay = (a, b) =>
    a && b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();

const monthLabel = document.getElementById('monthLabel');
const yearSelect = document.getElementById('yearSelect');
const daysGrid = document.getElementById('daysGrid');
const startDisplay = document.getElementById('startDisplay');
const endDisplay = document.getElementById('endDisplay');

for (let y = today.getFullYear() - 5; y <= today.getFullYear() + 5; y++) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    if (y === today.getFullYear()) opt.selected = true;
    yearSelect.appendChild(opt);
}

function checkDeadlineWarning() {
    const start = startDate;
    const end = endDate;

    if (start && end) {
        const diffTime = end - start;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays <= 3) {
            // Trigger smooth show for critical warning
            warningDiv.classList.add('show');
            shortDeadlineWarning.classList.remove('show');
        } else if (diffDays < 5) {
            // Trigger smooth show for moderate warning
            warningDiv.classList.remove('show');
            shortDeadlineWarning.classList.add('show');
        } else {
            // Hide both smoothly
            warningDiv.classList.remove('show');
            shortDeadlineWarning.classList.remove('show');
        }

    } else {
        warningDiv.classList.remove('show');
        shortDeadlineWarning.classList.remove('show');
    }
}

function updateFooter() {
    startDisplay.value = fmt(startDate);
    endDisplay.value = fmt(endDate);

}

function renderCalendar() {
    monthLabel.textContent = `${months[viewMonth]} ${viewYear}`;
    const dim = daysInMonth(viewYear, viewMonth)
    const firstDow = new Date(viewYear, viewMonth, 1).getDay();
    daysGrid.innerHTML = '';

    for (let i = 0; i < firstDow; i++) {
        const el = document.createElement('div');
        el.className = 'day empty';
        daysGrid.appendChild(el);
    }

    for (let d = 1; d <= dim; d++) {
        const date = new Date(viewYear, viewMonth, d);
        const el = document.createElement('div');
        el.className = 'day';
        el.textContent = d;

        if (sameDay(date, today)) el.classList.add('today');
        if (sameDay(date, startDate)) el.classList.add('selected-start');
        if (sameDay(date, endDate)) el.classList.add('selected-end');
        if (startDate && endDate && date > startDate && date < endDate) {
            el.classList.add('in-range');
        }
        el.addEventListener('click', () => onDayClick(date));
        daysGrid.appendChild(el);
    }
}

function onDayClick(date) {
    if (!startDate || (startDate && endDate)) {
        startDate = date;
        endDate = null;
        selectingEnd = true;
    }
    else if (selectingEnd) {
        if (date < startDate) {
            endDate = startDate;
            startDate = date;
        }
        else endDate = date;
        selectingEnd = false;
    }
    updateFooter();
    renderCalendar();
    checkDeadlineWarning();
}

document.getElementById('prevBtn').onclick = () => {
    viewMonth--;
    if (viewMonth < 0) { viewMonth = 11; viewYear--; }
    yearSelect.value = viewYear;
    renderCalendar();
};

document.getElementById('nextBtn').onclick = () => {
    viewMonth++;
    if (viewMonth > 11) { viewMonth = 0; viewYear++; }
    yearSelect.value = viewYear;
    renderCalendar();
};

yearSelect.onchange = () => {
    viewYear = parseInt(yearSelect.value);
    renderCalendar();
};

document.getElementById('clearBtn').onclick = () => {
    startDate = null;
    endDate = null;
    selectingEnd = false;
    updateFooter();
    renderCalendar();
};

document.getElementById('generateBtn').onclick = () => {
    const timelineDiv = document.getElementById('timelineBreakdown')
    timelineDiv.classList.add('show');
    requestAnimationFrame(() => {
        timelineDiv.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};

function parseInput(str) {
    const parts = str.split('-');              // ["2026", "06", "15"]
    if (parts.length !== 3) return null;

    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;     // back to zero-indexed for Date constructor
    const day = parseInt(parts[2]);

    if (isNaN(year) || isNaN(month) || isNaN(day)) return null;

    const d = new Date(year, month, day);     // local time, no UTC shift

    // Validate the date is real (e.g. rejects Feb 30)
    if (d.getFullYear() !== year || d.getMonth() !== month || d.getDate() !== day) return null;

    return d;
}

startDisplay.addEventListener('change', () => {
    console.log(startDisplay.value);
    const parsed = parseInput(startDisplay.value);
    console.log(parsed);
    if (parsed) {
        startDate = parsed;
        if (endDate && startDate > endDate) endDate = null;
        viewYear = startDate.getFullYear();
        viewMonth = startDate.getMonth();
        yearSelect.value = viewYear;
        renderCalendar();
        updateFooter();
    } else {
        startDisplay.value = fmt(startDate);
    }
});

endDisplay.addEventListener('change', () => {
    const parsed = parseInput(endDisplay.value);
    if (parsed) {
        endDate = parsed;
        if (startDate && endDate < startDate) {
            [startDate, endDate] = [endDate, startDate];
        }
        viewYear = endDate.getFullYear();
        viewMonth = endDate.getMonth();
        yearSelect.value = viewYear;
        renderCalendar();
        updateFooter();
    } else {
        endDisplay.value = fmt(endDate);
    }
});


renderCalendar();
updateFooter();

let touchStartX = 0;
let touchStartY = 0;

function isMobileWidth() {
    return window.innerWidth < 1100;
}

daysGrid.addEventListener('touchstart', (e) => {
    if (!isMobileWidth()) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

daysGrid.addEventListener('touchend', (e) => {
    if (!isMobileWidth()) return;

    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    const SWIPE_THRESHOLD = 50;

    //ignore mostly-vertical gestures
    if (Math.abs(diffX) < Math.abs(diffY)) return;

    if (diffX > SWIPE_THRESHOLD) {
        document.getElementById('prevBtn').click();
    } else if (diffX < -SWIPE_THRESHOLD) {
        document.getElementById('nextBtn').click();
    }

}, { passive: true });

    document.getElementById('assignment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const assignment = document.getElementById('assignment-select').value;
    const start = startDisplay.value;
    const due = endDisplay.value;
    const breakdownDiv = document.getElementById('timelineBreakdown');

    if (!assignment || !start || !due) {
        breakdownDiv.innerHTML = `<div style="color:#d7263d;font-weight:bold; justify-content: center; align-content: center;">Please select an assignment, start date, and due date.</div>`;
        return;
    }

    const startDay = new Date(start);
    const dueDay = new Date(due);
    const days = Math.floor((dueDay - startDay) / (1000 * 60 * 60 * 24));
    if (days < 0) {
        breakdownDiv.innerHTML = `<div style="color:#d7263d;font-weight:bold;">Due date must be after start date.</div>`;
        return;
    }
    // Block timeline generation if less than 5 days
    if (days < 5) {
        alert("Warning: The time between your start and due date is less than 5 days. This may not be enough time to complete the assignment. Consider contacting your professor for an extension.");
        return;
    }

    function generateStepRanges(breakdown, startDate, days) {
        const steps = [];
        const stepCount = breakdown.length;
        // Calculate how many days per step (distribute as evenly as possible)
        const baseDaysPerStep = Math.floor((days + 1) / stepCount);
        let remainder = (days + 1) % stepCount;
        let currentDay = 1;

        for (let i = 0; i < stepCount; i++) {
            let daysForThisStep = baseDaysPerStep + (remainder > 0 ? 1 : 0);
            remainder--;

            const start = currentDay;
            const end = currentDay + daysForThisStep - 1;
            const startDateObj = new Date(startDate);
            startDateObj.setDate(startDateObj.getDate() + (start - 1));
            const endDateObj = new Date(startDate);
            endDateObj.setDate(endDateObj.getDate() + (end - 1));

            let dayLabel = daysForThisStep === 1
                ? `Day ${start} (${startDateObj.toLocaleDateString()})`
                : `Days ${start}-${end} (${startDateObj.toLocaleDateString()} to ${endDateObj.toLocaleDateString()})`;

            steps.push(`${dayLabel}: <br>${breakdown[i]}`);
            currentDay += daysForThisStep;
        }
        return steps;
    }



    let steps = [];
    const assignmentData = CEN100_ASSIGNMENTS[assignment];
    if (assignmentData && assignmentData.steps) {
        steps = generateStepRanges(assignmentData.steps, startDate, days);
    } else {
        // Generic fallback for other assignments
        steps = [`Days 1-${days + 1} (${startDate.toLocaleDateString()} to ${dueDate.toLocaleDateString()}): Work on your assignment. Break your work into research, drafting, editing, and final review as needed.`];
    }

    breakdownDiv.innerHTML = `
    <div style="font-weight:bold;color:#a009d7;margin-bottom:18px;font-size:1.35em;">Step-by-Step Timeline:</div>
    <ol style="padding-left:32px;">
      ${steps.map(step => `<li style="margin-bottom:18px;line-height:1.7;">${step}</li>`).join('')}
    </ol>
    <div style="display:flex; gap:16px; margin-top:24px;" justify content>
      <button id="download-timeline-btn" class="btn btn-yellow">
        Save and Download
      </button>
    </div>
`;

    // Scroll to the timeline breakdown after generating it

    // Add PDF download logic
    setTimeout(() => {
        const btn = document.getElementById('download-timeline-btn');
        if (btn) {
            btn.onclick = function() {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF({
                    orientation: "p",
                    unit: "pt",
                    format: "a4"
                });

                // Get the timeline HTML and convert to plain text for PDF
                const timelineHtml = breakdownDiv.querySelector('ol').innerHTML;
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = timelineHtml;
                const stepsText = Array.from(tempDiv.querySelectorAll('li')).map(li => li.innerText);

                doc.setFont("helvetica", "bold");
                doc.setFontSize(18);
                doc.text("Step-by-Step Timeline", 40, 50);

                doc.setFont("helvetica", "normal");
                doc.setFontSize(12);

                const pageHeight = doc.internal.pageSize.height;
                const margin = 40;
                let y = 80;
                const lineHeight = 18;

                stepsText.forEach((step, idx) => {
                    // Split long steps into lines that fit the page width
                    const lines = doc.splitTextToSize(step, 500);
                    lines.forEach((line, i) => {
                        if (y > pageHeight - margin) {
                            doc.addPage();
                            y = margin;
                        }
                        doc.text(line, margin, y);
                        y += lineHeight;
                    });
                    y += 6; // Extra space between steps
                });

                doc.save("assignment-timeline.pdf");
            };
        }

        // Add feedback button logic
        const feedbackBtn = document.getElementById('feedback-btn');
        if (feedbackBtn) {
            feedbackBtn.onclick = function() {
                window.open('https://docs.google.com/forms/d/e/1FAIpQLScGjoCU9KW7aR4jlmjI10SKbpqavCE4X8C2ceFkaLExmEQukg/viewform?usp=sharing&ouid=103979447744273921797', '_blank');
            };
        }
    }, 0);
});


document.getElementById('assignment-form').addEventListener('input', function() {
    document.getElementById('timelineBreakdown').innerHTML = '';
});



const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const menuLinks = menuPanel.querySelectorAll('a');
const overlay = document.getElementById('overlay');
const bodyEl = document.body;
const sidebar = document.querySelector('.sidebar');
const rightColumn = document.querySelector('.right-column-menu');

function toggleMenu() {
    const isOpen = menuPanel.classList.toggle('open');
    overlay.classList.toggle('visible', isOpen);
    menuBtn.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuPanel.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    menuLinks.forEach(link => {
        if (isOpen) {
            link.removeAttribute('tabindex');
        } else {
            link.setAttribute('tabindex', '-1');
        }
    });
}

function closeMenu() {
    menuPanel.classList.remove('open');
    overlay.classList.remove('visible');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuPanel.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';

    menuLinks.forEach(link => {
        link.setAttribute('tabindex', '-1');
    });
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);



