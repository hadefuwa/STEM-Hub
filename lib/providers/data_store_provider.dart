import 'package:flutter/foundation.dart';
import '../data/data_store.dart';

class DataStoreProvider extends ChangeNotifier {
  late final DataStore dataStore;
  bool _isInitialized = false;

  bool get isInitialized => _isInitialized;

  Future<void> initialize() async {
    if (!_isInitialized) {
      dataStore = DataStore();
      await dataStore.initialize();
      _isInitialized = true;
      notifyListeners();
    }
  }

  Future<void> refresh() async {
    await dataStore.loadData();
    notifyListeners();
  }
}

