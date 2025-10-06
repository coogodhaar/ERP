const express = require('express');
const sequelize = require('./models/index');
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');
const taskRoutes = require('./routes/tasks');
const attendanceRoutes = require('./routes/attendance');
const leaveRoutes = require('./routes/leave');
const payrollRoutes = require('./routes/payroll');
const rolesRoutes = require('./routes/roles');
const documentsRoutes = require('./routes/documents');
const auditlogRoutes = require('./routes/auditlog');

const app = express();
app.use(express.json());

// Register routes
app.use('/auth', authRoutes);
app.use('/employees', employeeRoutes);
app.use('/tasks', taskRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/leave', leaveRoutes);
app.use('/payroll', payrollRoutes);
app.use('/roles', rolesRoutes);
app.use('/documents', documentsRoutes);
app.use('/auditlog', auditlogRoutes);

// DB setup and run
sequelize.sync().then(() => {
  app.listen(3000, () => console.log('ERP backend running on port 3000'));
});
