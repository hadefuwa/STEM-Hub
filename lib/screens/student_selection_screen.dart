import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../models/student.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';

class StudentSelectionScreen extends StatefulWidget {
  const StudentSelectionScreen({super.key});

  @override
  State<StudentSelectionScreen> createState() => _StudentSelectionScreenState();
}

class _StudentSelectionScreenState extends State<StudentSelectionScreen> {
  final _nameController = TextEditingController();
  final _ageController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    _nameController.dispose();
    _ageController.dispose();
    super.dispose();
  }

  Future<void> _createStudent(DataStore dataStore) async {
    if (_formKey.currentState!.validate()) {
      final student = Student(
        id: dataStore.getNextStudentId(),
        name: _nameController.text.trim(),
        age: int.parse(_ageController.text),
        createdAt: DateTime.now(),
      );
      await dataStore.addStudent(student);
      _nameController.clear();
      _ageController.clear();
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Student created successfully!')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final students = dataStore.getStudents();

    return AppScaffold(
      title: 'Select Student',
      body: Column(
        children: [
          // Create new student form
          Card(
            margin: const EdgeInsets.all(16),
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    const Text(
                      'Create New Student',
                      style: AppTextStyles.title,
                    ),
                    const SizedBox(height: 16),
                    TextFormField(
                      controller: _nameController,
                      decoration: const InputDecoration(
                        labelText: 'Name',
                        border: OutlineInputBorder(),
                      ),
                      validator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return 'Please enter a name';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 16),
                    TextFormField(
                      controller: _ageController,
                      decoration: const InputDecoration(
                        labelText: 'Age',
                        border: OutlineInputBorder(),
                      ),
                      keyboardType: TextInputType.number,
                      validator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return 'Please enter an age';
                        }
                        final age = int.tryParse(value);
                        if (age == null || age < 1 || age > 18) {
                          return 'Please enter a valid age (1-18)';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: () => _createStudent(dataStore),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.header,
                        padding: const EdgeInsets.symmetric(vertical: 16),
                      ),
                      child: const Text(
                        'Create Student',
                        style: TextStyle(color: Colors.white, fontSize: 16),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          // List of existing students
          Expanded(
            child: students.isEmpty
                ? const Center(
                    child: Text(
                      'No students yet. Create one above!',
                      style: TextStyle(fontSize: 16, color: Colors.grey),
                    ),
                  )
                : ListView.builder(
                    itemCount: students.length,
                    itemBuilder: (context, index) {
                      final student = students[index];
                      return Card(
                        margin: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 8,
                        ),
                        child: ListTile(
                          leading: CircleAvatar(
                            backgroundColor: AppColors.header,
                            child: Text(
                              student.name[0].toUpperCase(),
                              style: const TextStyle(color: Colors.white),
                            ),
                          ),
                          title: Text(
                            student.name,
                            style: AppTextStyles.cardTitle,
                          ),
                          subtitle: Text('Age: ${student.age}'),
                          trailing: const Icon(Icons.arrow_forward_ios, size: 16),
                          onTap: () {
                            // In a real app, you'd set the current student here
                            // For now, just navigate back
                            context.go(AppPaths.home);
                          },
                        ),
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}

