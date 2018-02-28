SELECT
 *
FROM
 software_approver
INNER JOIN approvers ON approvers.id = software_approver.approver_id
INNER JOIN software ON software.id = software_approver.software_id;
